import { NextResponse } from "next/server";
import db from "../../config/db";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export async function GET(request) {
  try {
    // Retrieve all users from the database
    const response = await db.from("users");

    return NextResponse.json({
      status: StatusCodes.OK,
      message: ReasonPhrases.OK,
      data: response,
    });
  } catch (error) {
    return NextResponse.json({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      data: [],
    });
  }
}
