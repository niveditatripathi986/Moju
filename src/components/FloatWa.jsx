import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function FloatWa({ onOpenAuditModal }) {
  const whatsappNumber = "917459893697";
  const whatsappMessage = encodeURIComponent("Hello Hindustan Marketing Media! I would like to inquire about your Digital Marketing & Strategy Audit services.");

  return (
    <>
      {/* WhatsApp Floating Chat Bubble (Bottom Left) */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          textDecoration: 'none'
        }}
        title="Chat on WhatsApp"
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M12.031 0C5.388 0 0 5.385 0 12.029c0 2.12.551 4.195 1.597 6.02L.038 23.51l5.632-1.477c1.761.966 3.738 1.477 5.767 1.477h.004c6.641 0 12.027-5.387 12.027-12.03S18.674 0 12.031 0zm0 21.512h-.002c-1.8 0-3.565-.483-5.111-1.398l-.367-.216-3.8.997.997-3.793-.238-.377A9.974 9.974 0 0 1 1.996 12.03c0-5.518 4.49-10.007 10.009-10.007 2.673 0 5.187 1.042 7.077 2.933a9.97 9.97 0 0 1 2.928 7.074c-.001 5.517-4.492 10.007-10.008 10.007zm5.485-7.494c-.301-.15-1.782-.879-2.059-.979-.278-.101-.482-.15-.683.15-.202.302-.777.979-.953 1.18-.176.202-.353.227-.654.076-1.503-.76-2.527-1.464-3.526-2.91-.258-.374.257-.348.847-1.53.076-.15.038-.278-.038-.429-.076-.15-.684-1.652-.937-2.261-.247-.591-.498-.511-.684-.52-.176-.008-.378-.01-.58-.01-.202 0-.53.075-.807.377-.277.301-1.059 1.034-1.059 2.52 0 1.486 1.084 2.922 1.236 3.123.15.201 2.128 3.25 5.158 4.557 2.051.884 2.766.953 3.8.796.864-.131 2.474-1.01 2.823-1.984.348-.975.348-1.81.246-1.984-.101-.176-.377-.277-.678-.428z" />
        </svg>
      </a>


    </>
  );
}
