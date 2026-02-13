import { supabase } from './supabase.js'

window.register = async function() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const packageType = document.getElementById('package').value

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })

  if(error){
    alert(error.message)
  } else {
    await supabase.from('profiles').insert([
      {
        id: data.user.id,
        email: email,
        package_type: packageType
      }
    ])
    alert("Berhasil daftar!")
    window.location.href = "dashboard.html"
  }
}

window.login = async function(){
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if(error){
    alert(error.message)
  } else {
    window.location.href = "dashboard.html"
  }
}
