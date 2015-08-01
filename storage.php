<?php include('top.php'); ?>

	<div class="conteudo">
		<div class="content">
			<div class="form">
				<h2> - Grave seu Storage - </h2>
				<label>Nome
					<input type="text" name="firstName"  id="firstName" placeholder="First name"/><br/>
				</label>

				<label>Sobrenome
					<input type="text" name="lastName" id="lastName" placeholder="Last name"/><br/>
				</label>

				<label>E-mail
					<input type="text" name="email" id="email" placeholder="Email"/><br/>
				</label>

				<input type="button" id="enviar" value="Gravar em Storage"/>
			</div>

			<div class="visualizar">
				<h2> - Informações gravadas em Storage - </h2>
				<ul>
					<li><strong>Nome: </strong><i id="nome"></i></li>
					<li><strong>Sobrenome: </strong><i id="sobrenome"></i></li>
					<li><strong>email: </strong><i id="emailEscrito"></i></li>
				</ul>
			</div>
		</div>
	</div>
</body>
</html>