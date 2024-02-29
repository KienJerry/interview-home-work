function Index() {
  console.log(process.env.NEXT_PUBLIC_API_ENDPOINT, "env local");
  return <div>123</div>;
}

export default Index;
