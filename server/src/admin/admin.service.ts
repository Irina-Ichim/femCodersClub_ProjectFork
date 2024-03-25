import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSponsorDto } from 'src/sponsor/dto/create-sponsor.dto';
import { ModifySponsorDto } from 'src/sponsor/dto/modify-sponsor.dto';
import { SponsorService } from 'src/sponsor/sponsor.service';

@Injectable()
export class AdminService {
    constructor(private readonly sponsorService: SponsorService){}

    async addSponsor( addSponsor: CreateSponsorDto ) {
        const sponsor = await this.sponsorService.findOneByName(addSponsor.sponsorsName);

        if (sponsor!==null) {
            throw new BadRequestException('Sponsor already exist');
        }

        try{
            await this.sponsorService.create(addSponsor);
                return addSponsor;
        }catch(err){
        console.log("Something went wrong")
        }
    };

    async editSponsor( sponsor_Id: number, editSponsor: ModifySponsorDto ){
        try{
            await this.sponsorService.modifySponsor(sponsor_Id, editSponsor);
                return "sponsor modification succsessfull"
        }catch(err){
            console.log("something went wrong")
        }
    }

    async deleteSponsor( sponsor_Id: number ){
        try{
            await this.sponsorService.removeSponsor(sponsor_Id);
                return "sponsor deleted"
        }catch(err){
            console.log("something went wrong")
        }
    }

}
