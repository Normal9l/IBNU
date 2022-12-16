let handler = function (m) {
  // this.sendContact(m.chat, '6281807254833', 'Nurutomo', m)
  conn.sendContact(m.chat, '6281807254833', 'IBNU OFFICIAL🅥⁩", m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
