import { IAuthDocument } from '@auth/interface/auth.interface';
import { AuthModel } from '@auth/model/auth.model';
import { Helpers } from '@global/helper/helpers';

class AuthService {
  public async getUserByUsernameOrEmail(username: string, email: string): Promise<IAuthDocument> {
    const query = {
      $or: [{ username: Helpers.firstLetterUppercase(username) }, { email: Helpers.lowerCase(email) }]
    };

    const user: IAuthDocument = (await AuthModel.findOne(query).exec()) as IAuthDocument;
    return user;
  }
}

export const authService: AuthService = new AuthService();
