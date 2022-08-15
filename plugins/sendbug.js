let handler = async(m, { conn, text }) => {
  let teks = `Halo Saya Akari-MD`
				}
				const ftrol = {key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`,
				   remoteJid: "6281903153426-1626053991@g.us"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 99999999,
				    status: 1,
				    surface: 1,
				    message: '',
				    orderTitle: '999999999', 
				    sellerJid: `0@s.whatsapp.net` 
				   }
				  }
				  }
                conn.sendMessage(m.chat, { text: teks }, {quoted: bug} )
}
handler.tags = ['owner']
handler.command = /^(sendbug)$/i

handler.owner = true

module.exports = handler
