import { Router } from "express";
import { getAllCompanies, getCompanyById, createCompany, updateCompany, deleteCompany } from "../controllers/companyController";

const companyRouter = Router();

companyRouter.get("/", getAllCompanies);
companyRouter.get("/:id", getCompanyById);
companyRouter.post("/create", createCompany);
companyRouter.put("/:id", updateCompany);
companyRouter.delete("/:id", deleteCompany);

export default companyRouter;