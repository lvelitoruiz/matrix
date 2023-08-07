import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

type Matrix = string[][];

interface MatrixInputProps {
  size: number;
}

export interface NumberInputSequenceHandle {
  rotate: () => void;
}

const NumberInputSequence = forwardRef<
  NumberInputSequenceHandle,
  MatrixInputProps
>(({ size }, ref) => {
  const createEmptyMatrix = (n: number): Matrix => {
    return Array.from({ length: n }, () => Array(n).fill(""));
  };

  const [matrix, setMatrix] = useState<Matrix>(createEmptyMatrix(size));

  useEffect(() => {
    setMatrix(createEmptyMatrix(size));
  }, [size]);

  const handleInputChange = (row: number, col: number, value: string) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = value;
    setMatrix(newMatrix);
  };

  const rotate = (X: any[][] = matrix, n: number = size) => {
    let copy = JSON.parse(JSON.stringify(X));

    if (n === 0 || n === 1) return;

    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        const tmp = copy[j][i];
        copy[j][i] = copy[i][j];
        copy[i][j] = tmp;
      }
    }

    for (let column = 0; column < n; column++) {
      let i = 0;
      let j = n - 1;

      while (i < j) {
        const tmp = copy[i][column];
        copy[i][column] = copy[j][column];
        copy[j][column] = tmp;

        i++;
        j--;
      }
    }

    setMatrix(copy);
  };

  useImperativeHandle(ref, () => ({
    rotate: () => rotate(),
  }));

  return (
    <div className="flex items-center h-[calc(100vh-72px)] justify-center gap-2">
      <div>
        {matrix.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid gap-2 mb-2"
            style={{
              gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
            }}
          >
            {row.map((value, colIndex) => (
              <div
                className="col-span-1 input-container w-20 h-16 overflow-x-hidden flex items-center justify-center relative"
                key={rowIndex + colIndex}
              >
                <input
                  type="text"
                  className="border-0 transition duration-300 ease-in-out w-full h-full flex items-center text-center text-3xl font-light outline-none rounded-sm focus:bg-cyan-300 focus:border-cyan-500 focus:border-b-8 focus:text-gray-500 text-white bg-cyan-600 border-b-4 border-cyan-800"
                  value={value}
                  onChange={(e) =>
                    handleInputChange(rowIndex, colIndex, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

NumberInputSequence.displayName = "NumberInputSequence";

export default NumberInputSequence;
