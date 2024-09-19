import React from 'react';

function SurveyBox() {
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSchAVCzfMpufXDS3gKelnT-IXeZ_53sWsCU_LvgVpe5aQEv9w/viewform?embedded=true";

  return (
    <iframe
      src={googleFormUrl}
      className="w-full h-full"
      style={{ border: 0 }}
      title="Survey Form"
    >
      Loading...
    </iframe>
  );
}

export default SurveyBox;
