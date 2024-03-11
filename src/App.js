import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-fundo m-auto">
      <div className="grid grid-cols-4 gap-4 p-6">
        <div className="bg-secundaria rounded-lg min-h-32 border hover:grid-flow-row border-black border-2">01</div>
        <div className="bg-terciaria rounded-lg min-h-32 border border-black border-2">02</div>
        <div className="bg-secundaria rounded-lg min-h-32 border border-black border-2">03</div>        
        <div className="bg-terciaria rounded-lg min-h-32 border border-black border-2">04</div>
        <div className="col-span-4 bg-primaria rounded-lg h-96 border border-black border-2">04</div>
        <div className="bg-secundaria rounded-lg min-h-32 border border-black border-2">05</div>
        <div className="bg-secundaria rounded-lg min-h-32 border border-black border-2">06</div>
        <div className="col-span-2 bg-secundaria rounded-lg min-h-32 border border-black border-2">07</div>
      </div>
    </div>
  );
}

export default App;
