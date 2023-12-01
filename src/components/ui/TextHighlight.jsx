function TextHighlight({ color, children }) {
  return <span className={`font-semibold text-${color}`}>{children}</span>;
}

export default TextHighlight;
