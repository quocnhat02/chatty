/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectId } from 'mongodb';
import { Request, Response } from 'express';
import { joiValidation } from '@global/decorator/joi-validation.decorator';
import { signupSchema } from '@auth/schema/signup.schema';
import { IAuthDocument } from '@auth/interface/auth.interface';
import { authService } from '@service/db/auth.service';
import { BadRequestError } from '@global/helper/error-handler';

export class SignUp {
  @joiValidation(signupSchema)
  public async create(req: Request, res: Response): Promise<void> {
    const { username, password, email, avatarColor, avatarImage } = req.body;
    const checkIfUserExist: IAuthDocument = await authService.getUserByUsernameOrEmail(username, email);

    if (checkIfUserExist) {
      throw new BadRequestError('Invalid credentials');
    }
  }
}
