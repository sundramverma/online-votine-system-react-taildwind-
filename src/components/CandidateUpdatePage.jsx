// 📄 FILE: CandidateUpdatePage.jsx

import React, { useState } from "react";
import UpdateCandidateForm from "./updateCandidateForm";
import UpdateCandidateForm from "./CandidateFormUpdate";

function CandidateUpdatePage() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="p-10">
      <button
        onClick={() => setOpenForm(true)}
        className="bg-purple-600 text-white p-3 rounded"
      >
        Update Candidate
      </button>

      {openForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <UpdateCandidateForm onClose={() => setOpenForm(false)} />
        </div>
      )}
    </div>
  );
}

export default CandidateUpdatePage;
