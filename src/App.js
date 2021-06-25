import Home from "./pages/Home"

function App() {
  return (
    <div
      className="font-body bg-cover min-h-screen bg-no-repeat"
      style={{
        backgroundImage: `url(
          "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=1600"
        )`
      }}
    >
      <Home />
    </div>
  )
}

export default App
