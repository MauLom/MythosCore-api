import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly service: CampaignsService) {}

  @Post()
  create(@Body() dto: any) {
    return this.service.create(dto);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.service.findById(id);
  }
}
