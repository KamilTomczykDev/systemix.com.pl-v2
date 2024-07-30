function PageContainer({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">{children}</div>
  );
}

export default PageContainer;
