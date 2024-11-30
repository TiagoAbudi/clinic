import NavBar from "./components/NavBar/NavBar"

const App = () => {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          alt="Your Company"
          src="src/imgs/logo.png"
          className="h-20 w-auto"
        />
      </div>
    </div>
  )
}

export default App