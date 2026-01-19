import ForCandidateButtons from './candidateButton';

function CandidateSection() {
  const handleAdd = () => {};
  const handleRemove = () => {};
  const handleUpdate = () => {};

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-3 mt-2">FOR CANDIDATE</h2>
      <img src="butt.jpg" alt="candidate icon" className="w-32 h-32 object-cover rounded-full border-4 mb-2" />
      <ForCandidateButtons onAdd={handleAdd} onRemove={handleRemove} onUpdate={handleUpdate} />
    </div>
  );
}

export default CandidateSection;
