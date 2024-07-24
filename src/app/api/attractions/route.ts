
import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";

export async function GET(request:any) {
    try {
      const promisePool = mysqlPool.promise();
      const [rows, fields] = await promisePool.query(`SELECT * FROM attractions;`);
      return NextResponse.json(rows);
    } catch (error) {
      console.error(error);
      return NextResponse.error();
    }
  }