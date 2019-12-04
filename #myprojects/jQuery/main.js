$( document ).ready(() => {

    let shedule = $('a[href="#sheldure"]')

    let chtour = $('.main_btna.text-center')
    
    let consult = $('.main_btn.text-center.contact')

    let overlay = $('.overlay')

    let modal = $('.modal')

    let cancel = $('.close')

    shedule.click(hidshow)
    chtour.click(hidshow)
    consult.click(hidshow)
    cancel.click(hidshow)

    function hidshow(){
        overlay.fadeToggle()
        modal.fadeToggle()
    }
})