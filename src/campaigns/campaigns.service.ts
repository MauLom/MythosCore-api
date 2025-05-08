import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign, CampaignDocument } from './schemas/campaign.schema';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectModel(Campaign.name) private model: Model<CampaignDocument>
  ) {}

  async create(dto: any) {
    return this.model.create(dto);
  }

  async findById(id: string) {
    return this.model.findById(id);
  }
}
