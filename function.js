module.exports = {
    embed: function (channel, message, deleteTimer) {
        chennel.send({
            embed:{
                description: message,
                color: 0x1D82B6
            }
        }).then(msg => {

            if (!isNaN(deletetimer)) {
                msg.delete(deletetimer)
            }

        })
    }
}