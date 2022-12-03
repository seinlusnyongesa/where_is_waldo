import React, { useEffect } from "react";

const Notification = ({ showNotification, setShowNotification }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowNotification({ show: false, charFound: false });
    }, 3000);
  }, [setShowNotification]);
  function NotificationWithStyles() {
    if (showNotification.charFound) {
      return (
        <div className="fixed top-14 left-[50%] bg-green-500 p-1 text-slate-200 text-xl z-30">
          you found {showNotification.targetName}
        </div>
      );
    }
    return (
      <div className="fixed top-14 left-[50%] bg-red-500 p-1 text-slate-100 text-xl z-30 ">
        that is not {showNotification.targetName}
      </div>
    );
  }

  return <NotificationWithStyles />;
};

export default Notification;
