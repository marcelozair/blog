import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import { BadRequestException, ForbiddenException } from '@nestjs/common/exceptions'
import { CredentialsDto, RegisterUserDto } from './dto/register-user.dto';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Inject(UsersService)
  private readonly userService: UsersService;

  @Post('register')
  async register(@Res() res: Response, @Body() registerUser: RegisterUserDto) {
    const { password, email } = registerUser;

    const userExist = await this.userService.findByEmail(email);

    if (userExist)
      return new ForbiddenException('User already exist');

    const hashPassword = await this.authService.encryptPassowrd(password);

    const user = await this.userService.createUser({
      ...registerUser,
      password: hashPassword,
      bio: null,
      picture: null,
    });

    const { authorization } = await this.authService.generateToken(user.id);

    return res.status(201).json({
      user: {
        id: userExist.id,
        username: user.username,
        email: user.email,
        bio: user.bio,
        picture: user.picture,
        authorization,
      }
    });
  }

  @Post('sign-in')
  async signIn(@Res() res: Response, @Body() credencials: CredentialsDto) {
    const { email, password } = credencials;

    const userExist = await this.userService.findByEmail(email);

    if (!userExist) return new BadRequestException('User do not found');

    const passwordIsValid = await this.authService.comparePassword(password, userExist.password);
    if (!passwordIsValid) return new BadRequestException('Password is invalid');

    const { authorization } = await this.authService.generateToken(userExist.id);

    return res.status(200).json({
      user: {
        id: userExist.id,
        username: userExist.username,
        email: userExist.email,
        bio: userExist.bio,
        picture: userExist.picture,
        authorization,
      }
    });
  }
}
