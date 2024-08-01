import { User, UserRole, UserStatus, Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { ApiError } from "@/lib/errors";

export interface UserCreateInput
  extends Omit<
    Prisma.UserCreateInput,
    "clientProfile" | "designerProfile" | "adminProfile"
  > {
  clientProfile?: Prisma.ClientProfileCreateNestedOneWithoutUserInput;
  designerProfile?: Prisma.DesignerProfileCreateNestedOneWithoutUserInput;
  adminProfile?: Prisma.AdminProfileCreateNestedOneWithoutUserInput;
}

export interface UserUpdateInput extends Partial<UserCreateInput> {}

export interface UserSearchParams {
  role?: UserRole;
  status?: UserStatus;
  searchTerm?: string;
  page?: number;
  limit?: number;
}

class UserService {
  async createUser(data: UserCreateInput): Promise<User> {
    try {
      const user = await prisma.user.create({
        data,
        include: {
          clientProfile: true,
          designerProfile: true,
          adminProfile: true,
        },
      });
      return user;
    } catch (error) {
      throw new ApiError("Failed to create user", 500, error);
    }
  }

  async getUserById(id: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
        include: {
          clientProfile: true,
          designerProfile: true,
          adminProfile: true,
        },
      });
      return user;
    } catch (error) {
      throw new ApiError("Failed to fetch user", 500, error);
    }
  }

  async updateUser(id: string, data: UserUpdateInput): Promise<User> {
    try {
      const user = await prisma.user.update({
        where: { id },
        data,
        include: {
          clientProfile: true,
          designerProfile: true,
          adminProfile: true,
        },
      });
      return user;
    } catch (error) {
      throw new ApiError("Failed to update user", 500, error);
    }
  }

  async deleteUser(id: string): Promise<void> {
    try {
      await prisma.user.delete({ where: { id } });
    } catch (error) {
      throw new ApiError("Failed to delete user", 500, error);
    }
  }

  async searchUsers(
    params: UserSearchParams
  ): Promise<{ users: User[]; total: number }> {
    const { role, status, searchTerm, page = 1, limit = 10 } = params;
    const skip = (page - 1) * limit;

    try {
      const whereClause: Prisma.UserWhereInput = {};
      if (role) whereClause.role = role;
      if (status) whereClause.status = status;
      if (searchTerm) {
        whereClause.OR = [
          { name: { contains: searchTerm, mode: "insensitive" } },
          { email: { contains: searchTerm, mode: "insensitive" } },
        ];
      }

      const [users, total] = await Promise.all([
        prisma.user.findMany({
          where: whereClause,
          include: {
            clientProfile: true,
            designerProfile: true,
            adminProfile: true,
          },
          skip,
          take: limit,
        }),
        prisma.user.count({ where: whereClause }),
      ]);

      return { users, total };
    } catch (error) {
      throw new ApiError("Failed to search users", 500, error);
    }
  }

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
        include: {
          clientProfile: true,
          designerProfile: true,
          adminProfile: true,
        },
      });
      return user;
    } catch (error) {
      throw new ApiError("Failed to fetch user by email", 500, error);
    }
  }

  async getUserByWalletAddress(walletAddress: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { walletAddress },
        include: {
          clientProfile: true,
          designerProfile: true,
          adminProfile: true,
        },
      });
      return user;
    } catch (error) {
      throw new ApiError("Failed to fetch user by wallet address", 500, error);
    }
  }

  async updateUserStatus(id: string, status: UserStatus): Promise<User> {
    try {
      const user = await prisma.user.update({
        where: { id },
        data: { status },
        include: {
          clientProfile: true,
          designerProfile: true,
          adminProfile: true,
        },
      });
      return user;
    } catch (error) {
      throw new ApiError("Failed to update user status", 500, error);
    }
  }

  async getUsersCount(): Promise<number> {
    try {
      const count = await prisma.user.count();
      return count;
    } catch (error) {
      throw new ApiError("Failed to get users count", 500, error);
    }
  }
}

export const userService = new UserService();
