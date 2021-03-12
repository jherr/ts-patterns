import * as fs from "fs";

export interface RecordHandler<T> {
  addRecord(record: T): void;
}

export function loader<T>(
  fileName: string,
  recordHandler: RecordHandler<T>
): void {
  const data: T[] = JSON.parse(fs.readFileSync(fileName).toString());
  data.forEach((record) => recordHandler.addRecord(record));
}
