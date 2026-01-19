function ForVoterButtons({ onAdd, onRemove, onUpdate }) {
  return (
    <div className="flex flex-col items-center space-y-3 mt-6">
      <button className="bg-green-500 text-white px-5 py-2 rounded w-64 hover:bg-green-600" onClick={onAdd}>Add Voter</button>
      <button className="bg-red-500 text-white px-5 py-2 rounded w-64 hover:bg-red-600" onClick={onRemove}>Remove Voter</button>
      <button className="bg-yellow-500 text-black px-5 py-2 rounded w-64 hover:bg-yellow-400" onClick={onUpdate}>Update Voter Details</button>
    </div>
  );
}

export default ForVoterButtons;
