import FosterList from '../../components/Foster/FosterList';
import './Foster.css';

const Foster = () => {
  return (
    <div className="foster-page">
      <h1>Foster Animals</h1>
      <p>Apply to temporarily care for animals in need.</p>
      <FosterList />
    </div>
  );
};

export default Foster;