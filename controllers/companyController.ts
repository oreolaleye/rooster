import { PrismaClient } from "@prisma/client";

const companyClient = new PrismaClient().company;

// getAllCompanies
export const getAllCompanies = async (req: any,res: any) => {
  try {
    const allCompanies = await companyClient.findMany({
      include: {
        users: true,
      }
    });
    res.status(200).json({ data: allCompanies });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//getCompanyById
export const getCompanyById = async (req: any,res: any) => {
  try {
    const companyId = req.params.id;
    const company = await companyClient.findUnique({
      where: {
        id: companyId,
      },
      include: {
        users: true,
      }
    });
    res.status(200).json({ data: company });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// createCompany
export const createCompany= async (req: any,res: any) => {
  try {
    const companyData = req.body;
    const company = await companyClient.create({
      data: companyData,
    });
    res.status(200).json({ data: company });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//updateCompany
export const updateCompany = async (req: any,res: any) => {
  try {
    const companyId = req.params.id
    const companyData = req.body;
    const company = await companyClient.update({
      where: {
        id: companyId,
      },
      data: companyData,
    });
    res.status(200).json({ data: company })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

//deleteCompany
export const deleteCompany = async (req: any,res: any) => {
  try {
    const companyId = req.params.id
    const user = await companyClient.delete({
      where: {
        id: companyId,
      }
    });
    res.status(200).json({ message: 'User deleted' })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}