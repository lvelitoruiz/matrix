import Header from "@/components/Header/Header";
import NumberInputSequence, {
  NumberInputSequenceHandle,
} from "@/components/Numbers/Numbers";
import { useRef, useState } from "react";

export default function Home() {
  const [rows, setRows] = useState(2);

  const tableRef = useRef<NumberInputSequenceHandle | null>(null);

  const handleRowsChange = (updatedRows: number) => {
    setRows(updatedRows);
  };

  const rotateChild = () => {
    if (tableRef.current) {
      tableRef.current.rotate();
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-100">
      <Header
        onDropDownChange={handleRowsChange}
        onRotateSibling={rotateChild}
      />
      <NumberInputSequence ref={tableRef} size={rows} />
    </div>
  );
}
