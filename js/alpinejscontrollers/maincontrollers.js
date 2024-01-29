document.addEventListener('alpine:init', () => {
    Alpine.data('maindata', () =>
        {
            message: 'i love css',
            asami= ['ali','hasan','reyhane'],
            testFunc() 
                alert(this.message)
            
        }
    )
})