export default (req, res) => {
  res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
  res.statusCode = 200;
  res.json({ message: "ok" });
};
//  Max-Age=0 -> 즉시 쿠키 소멸
