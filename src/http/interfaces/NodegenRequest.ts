import express from 'express';



export default interface NodegenRequest extends express.Request {
  jwtData: any;
  originalToken: string;
  clientIp: string;
}
