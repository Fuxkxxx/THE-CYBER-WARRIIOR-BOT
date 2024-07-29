let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "https://github.com/CYBER-WARRIIOR/CYBER-PB"
    let url = "https://github.com/CYBER-WARRIIOR/CYBER-PB"
    let murl = "https://youtu.be/DibiLc17dh0?si=xp9bQ-_frEyDB1-i"
    let img = "https://telegra.ph/file/1d97811b3956197a11f8b.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "𝑪𝒀𝑩𝑬𝑹_𝑾𝑨𝑹𝑹𝑰𝑶𝑹",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "𝑪𝒀𝑩𝑬𝑹_𝑾𝑨𝑹𝑹𝑰𝑶𝑹 IS ALIVE",
          body: "𝑪𝒀𝑩𝑬𝑹_𝑾𝑨𝑹𝑹𝑰𝑶𝑹",
          thumbnailUrl: img,
          sourceUrl: 'https://whatsapp.com/channel/0029VagNVUxDOQIXdDYKR61J',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
