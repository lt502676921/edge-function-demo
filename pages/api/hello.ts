import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge', // this is a pre-requisite
  regions: ['iad1'], // only execute this function on iad1
};

export default (req: NextRequest) => {
  return NextResponse.json({
    name: `Hello, 姆伊用药助手!`,
  });
};
