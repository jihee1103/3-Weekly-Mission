import { useState } from "react";

function useSample(getSample) {
  const [sampleId, setSampleId] = useState("");
  const [sampleEmail, setSampleEmail] = useState("");
  const [sampleProfile, setSampleProfile] = useState();

  const handleGetSampleUser = async () => {
    const { id, email, profileImageSource } = await getSample();

    setSampleId(id);
    setSampleEmail(email);
    setSampleProfile(profileImageSource);
  };

  handleGetSampleUser();

  return [sampleId, sampleEmail, sampleProfile];
}

export default useSample;
