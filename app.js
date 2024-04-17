import logo from './logo.svg';
import './App.css';
import PhanVanHoa_func from './components/PhanVanHoa_func';
import PhanVanHoa_class from './components/PhanVanHoa_class';
function App() {
  return (
    <>
      <h2>PhanVanHoa</h2>
      <p>gjfgh</p>
      <PhanVanHoa_func  />
      <PhanVanHoa_func fullname="Phan Van Hoa" diachi="HA TAY-HA NOI" />
      <PhanVanHoa_class  />
      <PhanVanHoa_class thongtin="hoc reactjs" thoigian="13h30pm" />
    </>
  );
}

export default App;