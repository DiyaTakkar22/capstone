// import React, { useState } from 'react';

// const Form = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [message, setMessage] = useState('');
//   const [isUploading, setIsUploading] = useState(false);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//     setMessage('');
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!selectedFile) {
//       setMessage('Please select a file.');
//       return;
//     }

//     setIsUploading(true);
    
//     try {
//       // Simulate file upload logic (e.g., sending the file to a server)
//       await uploadFile(selectedFile);

//       setMessage('File uploaded successfully.');
//       setSelectedFile(null);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setMessage('Error uploading file. Please try again.');
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   // Function to simulate file upload
//   const uploadFile = (file) => {
//     return new Promise((resolve, reject) => {
//       // Simulate file upload delay
//       setTimeout(() => {
//         // Simulate successful upload
//         resolve();
//         // Simulate failed upload
//         // reject(new Error('Upload failed'));
//       }, 2000);
//     });
//   };

//   return (
//     <div>
//       <h2>Upload Patient Data</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="fileInput">Select File:</label>
//           <input 
//             type="file" 
//             className="form-control-file" 
//             id="fileInput" 
//             onChange={handleFileChange} 
//           />
//         </div>
//         <button type="submit" className="btn btn-primary" disabled={isUploading}>
//           {isUploading ? 'Uploading...' : 'Upload'}
//         </button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Form;

import React, { useState } from 'react';

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setMessage('Please select a file.');
      return;
    }

    setIsUploading(true);
    
    try {
      // Simulate file upload logic (e.g., sending the file to a server)
      await uploadFile(selectedFile);

      setMessage('File uploaded successfully.');
      setSelectedFile(null);
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  // Function to simulate file upload
  const uploadFile = (file) => {
    return new Promise((resolve, reject) => {
      // Simulate file upload delay
      setTimeout(() => {
        // Simulate successful upload
        resolve();
        // Simulate failed upload
        // reject(new Error('Upload failed'));
      }, 2000);
    });
  };

  return (
    <div>
      <h2>Upload Patient Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fileInput">Select File:</label>
          <input 
            type="file" 
            className="form-control-file" 
            id="fileInput" 
            onChange={handleFileChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Form;
 