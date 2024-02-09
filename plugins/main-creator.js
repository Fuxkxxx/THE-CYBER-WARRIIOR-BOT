var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = princeImg.getRandom()	
const cat = `*_🛡️𝑪𝒀𝑩𝑬𝑹_𝑾𝑨𝑹𝑹𝑰𝑶𝑹 MD🛡️_*


*_—◉ 𝑪𝒀𝑩𝑬𝑹_𝑾𝑨𝑹𝑹𝑰𝑶𝑹 ʙᴏᴛ ᴏᴡɴᴇʀ 𝟷 wa.me/6797285516_*

*_—◉ 𝑪𝒀𝑩𝑬𝑹_𝑾𝑨𝑹𝑹𝑰𝑶𝑹 ʙᴏᴛ ᴏᴡɴᴇʀ 2 wa.me/923140053156_*
*---------------------*


*_ᴛʜᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ_*
*${developer}*`

await conn.sendFile(m.chat, pp, 'menuvid', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
