import ForVoterButtons from './components/voterButton';

function VoterSection() {
  const handleAdd = () => {};
  const handleRemove = () => {};
  const handleUpdate = () => {};

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-3 mt-2">FOR VOTER</h2>
      <img src="butt.jpg" alt="voter icon" className="w-32 h-32 object-cover rounded-full border-4 mb-2" />
      <ForVoterButtons onAdd={handleAdd} onRemove={handleRemove} onUpdate={handleUpdate} />
    </div>
  );
}

export default VoterSection;
