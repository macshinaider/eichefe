'use client';
import Cookies from 'js-cookie';

const WhatsappDasboard = () => {
  async function CreateInstance() {
    const token = Cookies.get('token');
    console.log(
      '%cMyProject%cline:6%ctoken',
      'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
      'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
      'color:#fff;background:rgb(237, 222, 139);padding:3px;border-radius:2px',
      token,
    );

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      }),
    };
    const res = await fetch(`/api/whatsapp/createInstance`, options);
    console.log(res);
  }
  return (
    <div className="flex flex-col m-1 bg-white text-black p-2 rounded justify-center items-center">
      <div>
        <button
          onClick={CreateInstance}
          className="bg-emerald-500 p-3 rounded text-white hover:bg-emerald-300"
        >
          Criar
        </button>
      </div>
    </div>
  );
};

export default WhatsappDasboard;
