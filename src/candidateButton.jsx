function ForCandidateButtons({ onAdd, onRemove, onUpdate }) {
  return (
    <div className="flex flex-col items-center space-y-3 mt-4">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 shadow"
        onClick={onAdd}
      >
        Add New Candidate
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 shadow"
        onClick={onRemove}
      >
        Remove Candidate
      </button>
      <button
        className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 shadow"
        onClick={onUpdate}
      >
        Update Candidate Details
      </button>
    </div>
  );
}

export default ForCandidateButtons;
