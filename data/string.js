<script>
        var title="Admin Login";
        var login=`
        <h2>${title}</h2>
        <dl>
          <dt>User Name</dt>
          <dd><input type="text" name="usrName" placeholder="Enter Your Name" required></dd>
          <dt>Password</dt>
          <dd><input type="Password"placeholder="Atleast 8 Chars required" name="Pwd" required></dd>
        </dl>
        <button>${title}</button>
       `;
       document.write(login);
      </script>