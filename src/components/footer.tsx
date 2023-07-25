import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="text-textGreen text-center p-4">
            © {new Date().getFullYear()} Copyright
            <br />
            <a className="text-[#5e5d5d]" href="#"> Jefferson M. Garcia | All Rights Reserved</a>
        </div>
    );
};

export default Footer;