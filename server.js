var dbd = require('dbd.js')
var bot = new dbd.Bot({
    token: "token",
    prefix:"!"
})
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code
    })
    bot.status({
    text: `Expert Boş Altyapı`,
    type: "PLAYING",
    time: 12
})
    bot.command({
        name: "isim",//komutun ismi
        code: `Komut`//komutun kodu
})
    bot.variables({
    variableismi: "variabledeğeri",
    variableismi: "variabledeğeri"//yeni variable açarken herzaman en sondaki variablenin sonuna , koyup alt tarafa geçin
  })
}
