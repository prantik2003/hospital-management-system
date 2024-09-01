import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          CuraSync: Revolutionizing Hospital Management for Seamless Healthcare Delivery
          </p>
          <p>CuraSync is a cutting-edge hospital management web application designed to streamline healthcare operations and enhance patient care. Built with an intuitive interface and robust features, CuraSync enables healthcare providers to efficiently manage all aspects of hospital administration—from patient admissions and medical records to staff scheduling and billing—through a single, unified platform.</p>
          <p>At its core, CuraSync aims to reduce the administrative burden on hospitals, ensuring that healthcare professionals can focus more on delivering quality care and improving patient outcomes. With real-time data synchronization and advanced reporting tools, CuraSync ensures that critical information is accessible at all times, enabling quick decision-making and enhancing overall hospital efficiency.</p>
          <p>
          CuraSync's scalable and secure system integrates seamlessly with existing hospital infrastructure, offering features such as appointment scheduling, digital patient records, inventory management, and automated billing processes. The app is equipped with advanced data encryption, ensuring that sensitive patient information remains secure and compliant with healthcare regulations.
          </p>
          <p>Whether for small clinics or large hospitals, CuraSync is the go-to solution for modernizing hospital management systems, empowering medical staff to deliver the highest standard of care while reducing operational complexity.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
