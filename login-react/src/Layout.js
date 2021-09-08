export function Content(props) {
    return (
      <div className="content">
        { props.children }
      </div>
    );
}
  
export function Main(props) {
    return (
      <main role="main">
        { props.children }
      </main>
    );
}