import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient().user;

// getAllUsers
export const getAllUsers = async (req: any,res: any) => {
  try {
    const allUsers = await userClient.findMany({
      include: {
        company: true,
      }
    });
    res.status(200).json({ data: allUsers });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//getUserById
export const getUserById = async (req: any,res: any) => {
  try {
    const userId = req.params.id;
    const user = await userClient.findUnique({
      where: {
        id: userId,
      },
      include: {
        company: true,
      }
    });
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// createUser
export const createUser = async (req: any,res: any) => {
  try {
    const userData = req.body;
    const user = await userClient.create({
      data: userData,
    });
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//updateUser
export const updateUser = async (req: any,res: any) => {
  try {
    const userId = req.params.id
    const userData = req.body;
    const user = await userClient.update({
      where: {
        id: userId,
      },
      data: userData,
    });
    res.status(200).json({ data: user })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

//deleteUser
export const deleteUser = async (req: any,res: any) => {
  try {
    const userId = req.params.id
    const user = await userClient.delete({
      where: {
        id: userId,
      }
    });
    res.status(200).json({ message: 'User deleted' })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}