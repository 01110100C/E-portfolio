function showPage(id, btn)
{
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active')); 
    document.querySelectorAll('.nav-tabs button').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (btn) btn.classList.add('active');
}

function handleSubmit(e)
{
    e.preventDefault(); 
    const btn = e.target.querySelector('.submit-btn'); 
    btn.textContent = ' Sent!';
    btn.style.background = '#1a9e5a'; 
    btn.style.boxShadow - ' 0 0 24px rgba(26, 158, 90, 0.4'; 
    setTimeout(() => {
        btn.textContent = 'Submit';
        btn.style.background = ''; 
        btn.style.boxShadow = ''; 
        e.target.reset();
    }, 3000); 
}