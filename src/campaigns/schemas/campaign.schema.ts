import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CampaignDocument = Campaign & Document;

@Schema({ timestamps: true })
export class Campaign {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Object })
  config: Record<string, any>;

  @Prop({ default: 'active' })
  status: string;

  @Prop({ type: [Object], default: [] })
  context: Record<string, any>[];
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
